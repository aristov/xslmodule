<?xml version="1.0"?>
<xsl:transform version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <title>Schedule</title>
            <meta charset="utf-8"/>
            <link rel="stylesheet" href="test.css"/>
            <table>
                <tr>
                    <th>Agent</th>
                    <th>Subject</th>
                    <th>Start time</th>
                    <th>End time</th>
                </tr>
                <xsl:for-each select="schedule/interval">
                    <tr>
                        <td><xsl:value-of select="agent"/></td>
                        <td><xsl:value-of select="subject"/></td>
                        <td><xsl:value-of select="startTime"/></td>
                        <td><xsl:value-of select="endTime"/></td>
                    </tr>
                </xsl:for-each>
            </table>
        </html>
    </xsl:template>
</xsl:transform>
