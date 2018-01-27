<?xml version="1.0"?>
<xsl:transform version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <title>Schedule</title>
            <meta charset="utf-8"/>
            <link rel="stylesheet" href="test.css"/>
            <xsl:apply-templates/>
        </html>
    </xsl:template>
    <xsl:template match="schedule">
        <table>
            <tr>
                <th>Agent</th>
                <th>Subject</th>
                <th>Start Time</th>
                <th>End Time</th>
            </tr>
            <xsl:apply-templates/>
        </table>
    </xsl:template>
    <xsl:template match="interval">
        <tr>
            <td><xsl:value-of select="agent"/></td>
            <td><xsl:value-of select="subject"/></td>
            <td><xsl:value-of select="startTime"/></td>
            <td><xsl:value-of select="endTime"/></td>
        </tr>
    </xsl:template>
</xsl:transform>
